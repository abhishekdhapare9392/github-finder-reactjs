import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// Components
import Loading from './components/Loading';
import Header from './components/Header';
import Input from './components/Input';
import Profile from './components/Profile';
import List from './components/List';

function App() {
  const [query, setQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [isProfile, setIsProfile] = useState(false);

  const fetchUsers = () => {
    setIsProfile(false);
    setLoading(true);
    const url = `https://api.github.com/search/users?q=${query}`;
    axios.get(url).then(data => {
        // console.log(data);
        setUserList(data.data.items);
        setLoading(false);
    })
  }

  const showProfile = (username) => {
      setIsProfile(true);
      setLoading(true);
      const url = `https://api.github.com/users/${username}`;
      axios.get(url).then(data => {
        console.log(data);
        setUser(data.data);
        setLoading(false);
    })
  }

  return (
    <main>
      <Header />
      <Input setQuery={setQuery} fetchUsers={fetchUsers} />
      {loading ? <Loading /> : isProfile ? (
        <Profile user={user} setIsProfile={setIsProfile} />
      ) : (
      <List userList={userList} showProfile={showProfile} />
      )}
      
    </main>
  );
}

export default App;
