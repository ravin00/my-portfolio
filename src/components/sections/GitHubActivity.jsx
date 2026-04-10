import { useEffect, useState } from "react";
import { FaCodeBranch, FaGithub, FaRegStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

const GITHUB_USERNAME = "ravin00";

export const GitHubActivity = () => {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        const fetchGitHubData = async () => {
            try {
                setLoading(true);
                setError("");

                const [profileRes, reposRes, eventsRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=8`),
                ]);

                if (!profileRes.ok || !reposRes.ok || !eventsRes.ok) {
                    throw new Error("Unable to load live GitHub updates right now.");
                }

                const [profileData, reposData, eventsData] = await Promise.all([
                    profileRes.json(),
                    reposRes.json(),
                    eventsRes.json(),
                ]);

                if (!isMounted) return;

                setProfile(profileData);
                setRepos(reposData);
                setEvents(eventsData);
            } catch (err) {
                if (!isMounted) return;
                setError(err.message || "Unable to load live GitHub updates right now.");
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchGitHubData();

        return () => {
            isMounted = false;
        };
    }, []);

    const recentEvents = events
        .filter((event) => ["PushEvent", "PullRequestEvent", "IssuesEvent", "WatchEvent"].includes(event.type))
        .slice(0, 5)
        .map((event) => {
            const repo = event.repo?.name || "repository";
            if (event.type === "PushEvent") return `Pushed commits to ${repo}`;
            if (event.type === "PullRequestEvent") return `Updated pull request in ${repo}`;
            if (event.type === "IssuesEvent") return `Worked with issues in ${repo}`;
            return `Starred ${repo}`;
        });

    return (
        <section id="github-live" className="py-24 relative">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-5xl md:text-6xl text-gray-800 mb-4">Work Updates</h2>
                        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
                            Work updates and contributions.
                        </p>
                    </div>

                    {loading ? (
                        <div className="cartoon-card p-8 bg-white text-center">
                            <p className="font-funky text-gray-700">Loading live GitHub data...</p>
                        </div>
                    ) : error ? (
                        <div className="cartoon-card p-8 bg-white text-center">
                            <p className="font-funky text-red-600">{error}</p>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-funky inline-flex items-center gap-2 px-6 py-3 text-gray-800 mt-4"
                            >
                                <FaGithub /> Visit GitHub Profile
                            </a>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="cartoon-card p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-5">
                                        <FaGithub className="text-2xl text-gray-700" />
                                        <h3 className="font-funky text-xl text-gray-800">Profile Snapshot</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="rounded-xl bg-purple-50 p-4 border border-purple-100">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Followers</p>
                                            <p className="font-heading text-3xl text-purple-600">{profile?.followers ?? 0}</p>
                                        </div>
                                        <div className="rounded-xl bg-cyan-50 p-4 border border-cyan-100">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Public Repos</p>
                                            <p className="font-heading text-3xl text-cyan-600">{profile?.public_repos ?? 0}</p>
                                        </div>
                                    </div>

                                    <h4 className="font-funky text-lg text-gray-800 mb-3">Recently Updated Repositories</h4>
                                    <div className="space-y-3">
                                        {repos.slice(0, 4).map((repo) => (
                                            <a
                                                key={repo.id}
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block rounded-xl border border-gray-200 p-3 hover:bg-gray-50 transition"
                                            >
                                                <p className="font-funky text-gray-800">{repo.name}</p>
                                                <div className="text-xs text-gray-500 flex items-center gap-4 mt-1">
                                                    <span className="inline-flex items-center gap-1"><FaRegStar /> {repo.stargazers_count}</span>
                                                    <span className="inline-flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
                                                    <span>{repo.language || "Mixed"}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="cartoon-card p-6 bg-white">
                                    <h3 className="font-funky text-xl text-gray-800 mb-4">Recent Activity Feed</h3>
                                    <div className="space-y-3">
                                        {recentEvents.length > 0 ? (
                                            recentEvents.map((item, index) => (
                                                <div key={`${item}-${index}`} className="rounded-xl border border-gray-200 p-3 bg-white">
                                                    <p className="text-gray-700">{item}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-600">No recent public activity available.</p>
                                        )}
                                    </div>

                                    <a
                                        href={`https://github.com/${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-funky inline-flex items-center gap-2 px-6 py-3 text-gray-800 mt-6"
                                    >
                                        <FaGithub /> See Full GitHub Profile
                                    </a>
                                </div>
                            </div>

                            <div className="cartoon-card p-6 bg-white">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <h3 className="font-funky text-xl text-gray-800">Contribution Graph</h3>
                                    <a
                                        href={`https://github.com/${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-600 hover:underline"
                                    >
                                        View on GitHub
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-gray-200 p-3 overflow-x-auto bg-white">
                                    <img
                                        src={`https://ghchart.rshah.org/8b5cf6/${GITHUB_USERNAME}`}
                                        alt={`${GITHUB_USERNAME} GitHub contribution graph`}
                                        className="w-full min-w-[760px]"
                                        loading="lazy"
                                    />
                                </div>

                                <p className="text-xs text-gray-500 mt-3">
                                    Live public contribution data from GitHub.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};
