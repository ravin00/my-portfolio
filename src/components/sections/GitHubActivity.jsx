import { useEffect, useRef, useState } from "react";
import { FaCodeBranch, FaGithub, FaRegStar, FaUsers } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaBookOpen, FaCodeFork, FaStar } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

const GITHUB_USERNAME = "ravin00";

const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (target == null) return;
    if (started.current && value === target) return;
    started.current = true;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return value;
};

const StatTile = ({ label, value, icon: Icon }) => {
  const display = useCountUp(value);
  return (
    <div className="card p-5 bg-white">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
          {label}
        </span>
        <Icon className="text-sm text-[var(--text-subtle)]" />
      </div>
      <p className="font-display text-3xl font-semibold text-[var(--text)] tabular-nums">
        {value == null ? "—" : display}
      </p>
    </div>
  );
};

const eventLabel = (ev) => {
  const repo = ev.repo?.name?.split("/").slice(-1)[0] ?? "";
  switch (ev.type) {
    case "PushEvent": {
      const n = ev.payload?.commits?.length ?? 0;
      return { verb: `Pushed ${n} commit${n === 1 ? "" : "s"} to`, repo };
    }
    case "PullRequestEvent":
      return { verb: `${ev.payload?.action ?? "Updated"} PR in`, repo };
    case "IssuesEvent":
      return { verb: `${ev.payload?.action ?? "Updated"} issue in`, repo };
    case "CreateEvent":
      return { verb: `Created ${ev.payload?.ref_type ?? "ref"} in`, repo };
    case "DeleteEvent":
      return { verb: `Deleted ${ev.payload?.ref_type ?? "ref"} in`, repo };
    case "WatchEvent":
      return { verb: "Starred", repo };
    case "ForkEvent":
      return { verb: "Forked", repo };
    case "ReleaseEvent":
      return { verb: `Released ${ev.payload?.release?.tag_name ?? ""} in`, repo };
    case "PullRequestReviewEvent":
      return { verb: "Reviewed PR in", repo };
    case "IssueCommentEvent":
      return { verb: "Commented on issue in", repo };
    default:
      return { verb: ev.type.replace(/Event$/, ""), repo };
  }
};

const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  "C#": "#512BD4",
  Java: "#ED8B00",
  HTML: "#E34F26",
  CSS: "#1572B6",
  SCSS: "#CC6699",
  Shell: "#4EAA25",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#CC342D",
  PHP: "#777BB4",
  Dockerfile: "#2496ED",
  HCL: "#844FBA",
  Vue: "#42B883",
  Svelte: "#FF3E00",
  Kotlin: "#7F52FF",
  Swift: "#F05138",
  C: "#555555",
  "C++": "#F34B7D",
  Jupyter: "#DA5B0B",
};

const computeTopRepos = (repos) => {
  return repos
    .filter(
      (r) =>
        !r.fork &&
        !r.archived &&
        r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
    )
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 3)
    .map((r) => ({
      name: r.name,
      description: r.description || "No description provided.",
      language: r.language,
      color: LANG_COLORS[r.language] || "#a1a1aa",
      stars: r.stargazers_count,
      forks: r.forks_count,
      updated: r.pushed_at,
      url: r.html_url,
    }));
};

const timeAgo = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
};

export const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [totalStars, setTotalStars] = useState(null);
  const [pinned, setPinned] = useState([]);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const [profileRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`),
        ]);
        if (!profileRes.ok) throw new Error("GitHub API rate-limited or unavailable.");
        const p = await profileRes.json();
        const repos = reposRes.ok ? await reposRes.json() : [];
        const ev = eventsRes.ok ? await eventsRes.json() : [];
        if (!mounted) return;
        setProfile(p);
        setTotalStars(repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0));
        setPinned(computeTopRepos(repos));
        setEvents(ev.filter((e) => eventLabel(e).repo).slice(0, 5));
      } catch (err) {
        if (mounted) setError(err.message || "Unable to load GitHub data.");
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="github-live" className="py-24 sm:py-32">
      <div className="container-tight">
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Activity</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text)] mb-4">
              Public GitHub
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              A live snapshot of what I've been building. Numbers pulled from the
              GitHub public API — no cache, no fluff.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger delayStep={60}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div data-stagger-item>
              <StatTile
                label="Repos"
                value={profile?.public_repos ?? null}
                icon={FaBookOpen}
              />
            </div>
            <div data-stagger-item>
              <StatTile label="Stars" value={totalStars} icon={FaRegStar} />
            </div>
            <div data-stagger-item>
              <StatTile
                label="Followers"
                value={profile?.followers ?? null}
                icon={FaUsers}
              />
            </div>
            <div data-stagger-item>
              <StatTile
                label="Following"
                value={profile?.following ?? null}
                icon={FaCodeBranch}
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 mb-6">
            <div className="card p-6 bg-white">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-muted)] flex items-center justify-center">
                    <FaGithub className="text-[var(--text)]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[var(--text)] text-sm">
                      Contribution graph
                    </p>
                    <p className="text-xs text-[var(--text-subtle)] font-mono">
                      Last 12 months · @{GITHUB_USERNAME}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  Profile <FaArrowUpRightFromSquare className="text-xs" />
                </a>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4 overflow-x-auto bg-[var(--bg-subtle)]">
                <img
                  src={`https://ghchart.rshah.org/4f46e5/${GITHUB_USERNAME}?v=${new Date().toISOString().slice(0,10)}`}
                  alt={`${GITHUB_USERNAME} contribution graph`}
                  className="w-full min-w-[560px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="card p-6 bg-white flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                  Currently building
                </p>
                <span className="text-xs text-[var(--text-subtle)] font-mono">
                  most recent
                </span>
              </div>
              {pinned.length === 0 ? (
                <div className="space-y-3 flex-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-lg bg-[var(--bg-muted)] animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 flex-1">
                  {pinned.map((r) => (
                    <li key={r.name}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-lg border border-[var(--border)] bg-[var(--bg-subtle)] hover:border-[var(--border-strong)] hover:bg-white transition-all p-4"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <span className="font-display font-semibold text-[var(--text)] text-sm truncate group-hover:text-[var(--accent)] transition-colors">
                            {r.name}
                          </span>
                          <FaArrowUpRightFromSquare className="text-[10px] text-[var(--text-subtle)] group-hover:text-[var(--text)] transition-colors mt-1 flex-shrink-0" />
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-3">
                          {r.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[var(--text-subtle)] font-mono">
                          {r.language && (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: r.color }}
                              />
                              {r.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <FaStar className="text-[10px]" />
                            {r.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCodeFork className="text-[10px]" />
                            {r.forks}
                          </span>
                          <span className="ml-auto tabular-nums">
                            {timeAgo(r.updated)}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger delayStep={70}>
          <div className="card p-6 bg-white">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                Recent activity
              </p>
              <span className="text-xs text-[var(--text-subtle)] font-mono">
                live
              </span>
            </div>
            {error && (
              <p className="text-sm text-[var(--text-muted)]">{error}</p>
            )}
            {!error && events.length === 0 && (
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="h-10 rounded-md bg-[var(--bg-muted)] animate-pulse"
                  />
                ))}
              </ul>
            )}
            {!error && events.length > 0 && (
              <ul className="divide-y divide-[var(--border)]">
                {events.map((ev) => {
                  const { verb, repo } = eventLabel(ev);
                  return (
                    <li
                      key={ev.id}
                      className="py-3 flex items-center gap-3 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="flex-1 text-[var(--text)] truncate">
                        <span className="text-[var(--text-muted)]">{verb}</span>{" "}
                        <a
                          href={`https://github.com/${ev.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-[var(--accent)] transition-colors"
                        >
                          {repo}
                        </a>
                      </p>
                      <span className="text-xs font-mono text-[var(--text-subtle)] flex-shrink-0">
                        {timeAgo(ev.created_at)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
