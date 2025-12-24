import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

interface Game {
  id: string;
  name: string;
  description: string;
  download_link?: string;
  image_url?: string;
  created_at: string;
}

interface User {
  email: string;
  username: string;
  role: string;
  member_since: string;
  created_at: string;
}

const AdminDashboard: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'games' | 'users'>('games');
  const [games, setGames] = useState<Game[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not admin
  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      window.location.href = '/';
    }
  }, [user, isLoading]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch('/api/admin/data');
        const data = await response.json();
        setGames(data.games || []);
        setUsers(data.users || []);
      } catch (err) {
        console.error('Error fetching admin data:', err);
        setError('Failed to load admin data');
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === 'admin') {
      fetchAdminData();
    }
  }, [user]);

  const handleDeleteGame = async (gameId: string) => {
    if (!confirm('Bạn có chắc muốn xóa game này?')) return;

    try {
      const response = await fetch(`/api/admin/delete-game?id=${gameId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setGames(games.filter(game => game.id !== gameId));
        alert('Game đã được xóa thành công!');
      } else {
        const errorData = await response.json();
        alert('Lỗi: ' + errorData.error);
      }
    } catch (err) {
      console.error('Error deleting game:', err);
      alert('Có lỗi xảy ra khi xóa game');
    }
  };

  const handleDeleteUser = async (email: string) => {
    if (!confirm('Bạn có chắc muốn xóa user này?')) return;

    try {
      const response = await fetch(`/api/admin/delete-user?email=${email}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setUsers(users.filter(user => user.email !== email));
        alert('User đã được xóa thành công!');
      } else {
        const errorData = await response.json();
        alert('Lỗi: ' + errorData.error);
      }
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Có lỗi xảy ra khi xóa user');
    }
  };

  if (isLoading || !user || user.role !== 'admin') {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <div className="relative flex h-auto min-h-screen w-full flex-col">
          <Navbar />
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-white text-xl">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <div className="relative flex h-auto min-h-screen w-full flex-col">
          <Navbar />
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-white text-xl">Loading admin data...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <Navbar />

        <main className="flex flex-1 justify-center py-5 sm:py-8 lg:py-12">
          <div className="layout-content-container flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Link className="text-[#9da6b9] hover:text-white text-sm font-medium leading-normal transition-colors" to="/">Store</Link>
              <span className="text-[#9da6b9] text-sm font-medium leading-normal">/</span>
              <span className="text-white text-sm font-medium leading-normal">Admin Dashboard</span>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Admin Dashboard</h1>
              <p className="text-[#9da6b9] text-base">Quản lý database GameStore</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 border-b border-white/10">
              <button
                onClick={() => setActiveTab('games')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'games'
                    ? 'text-white border-b-2 border-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Quản lý Games ({games.length})
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'users'
                    ? 'text-white border-b-2 border-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Quản lý Users ({users.length})
              </button>
            </div>

            {/* Games Tab */}
            {activeTab === 'games' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold">Danh sách Games</h2>
                {error && (
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {games.map((game) => (
                    <div key={game.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2">{game.name}</h3>
                          <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
                          <p className="text-gray-500 text-xs mt-2">
                            {new Date(game.created_at).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteGame(game.id)}
                          className="ml-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex-shrink-0"
                          title="Xóa game"
                        >
                          <span className="material-symbols-outlined !text-lg">delete</span>
                        </button>
                      </div>
                      {game.download_link && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="material-symbols-outlined !text-base text-green-400">link</span>
                          <span className="text-green-400">Có link tải</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {games.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    Chưa có game nào trong database
                  </div>
                )}
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-2xl font-bold">Danh sách Users</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {users.map((user) => (
                    <div key={user.email} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2">{user.username}</h3>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                          <p className="text-gray-500 text-xs mt-2">
                            Role: {user.role} | Tham gia: {user.member_since}
                          </p>
                        </div>
                        {user.role !== 'admin' && (
                          <button
                            onClick={() => handleDeleteUser(user.email)}
                            className="ml-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex-shrink-0"
                            title="Xóa user"
                          >
                            <span className="material-symbols-outlined !text-lg">delete</span>
                          </button>
                        )}
                      </div>
                      {user.role === 'admin' && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="material-symbols-outlined !text-base text-yellow-400">admin_panel_settings</span>
                          <span className="text-yellow-400">Admin Account</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {users.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    Chưa có user nào trong database
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;