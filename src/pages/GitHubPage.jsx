import { useState, useEffect } from 'react';
import { FaGithub, FaUserFriends, FaCode, FaUserPlus, FaMapMarkerAlt, FaBuilding, FaLink, FaCalendarAlt, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Container from '../components/ui/Container';
import { motion } from 'framer-motion';

const GitHubPage = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributionData, setContributionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/ahadali027');
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await userResponse.json();
        setUserData(userData);

        const reposResponse = await fetch('https://api.github.com/users/ahadali027/repos?sort=updated&per_page=6');
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);

        generateMockContributionData();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const generateMockContributionData = () => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < 12; i++) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const count = Math.floor(Math.random() * 25) + 5;
      data.push({
        month: month.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        count,
      });
    }
    setContributionData(data.reverse());
  };

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen bg-light-100 dark:bg-dark-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen bg-light-100 dark:bg-dark-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-light-100 dark:bg-dark-100">
      <Container>
        <SectionHeading
          title="GitHub Profile"
          subtitle="My open-source contributions and coding journey"
          centered
        />

        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white dark:bg-dark-200 rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={userData.avatar_url}
                  alt={userData.name || userData.login}
                  className="w-32 h-32 rounded-full border-4 border-primary-500 dark:border-primary-400"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {userData.name || userData.login}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {userData.bio || 'MERN Stack Developer'}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaUserFriends />
                      <span>{userData.followers} Followers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaUserPlus />
                      <span>{userData.following} Following</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaCode />
                      <span>{userData.public_repos} Repositories</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    {userData.location && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt />
                        <span>{userData.location}</span>
                      </div>
                    )}
                    {userData.company && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaBuilding />
                        <span>{userData.company}</span>
                      </div>
                    )}
                    {userData.blog && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FaLink />
                        <a 
                          href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-500 dark:hover:text-primary-400"
                        >
                          {userData.blog}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FaCalendarAlt />
                      <span>Joined {formatDate(userData.created_at)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-white dark:bg-dark-200 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contribution Activity</h3>
              
              <div className="mb-8">
                <div className="flex items-end justify-between h-48 gap-1">
                  {contributionData.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="relative flex-1 group"
                      initial={{ height: 0 }}
                      animate={{ height: `${(item.count / 30) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <div 
                        className="w-full bg-primary-500 dark:bg-primary-400 rounded-t-sm hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors"
                        style={{ height: '100%' }}
                      ></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 mt-2 pointer-events-none z-10 whitespace-nowrap">
                        {item.count} contributions in {item.month}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {contributionData.map((item, index) => (
                    <div key={index} className={index % 2 === 0 ? "block" : "hidden sm:block lg:block"}>
                      {item.month}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Note: This visualization represents an estimate of your GitHub activity.
                <br/>
                For the complete contribution graph, please visit your GitHub profile.
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Recent Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <div 
                  key={repo.id}
                  className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-300">
                      {repo.private ? 'Private' : 'Public'}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <FaCode />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch />
                      {repo.forks_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye />
                      {repo.watchers_count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<FaGithub />}
              iconPosition="left"
            >
              View GitHub Profile
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GitHubPage; 