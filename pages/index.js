import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getSupabase } from '../utils/supabaseClient'; // Updated path
import styles from '../styles/globals.css'; // Updated path
import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index({ user }) {
  const [todos, setTodos] = useState([]);
  const [designs, setDesigns] = useState([]);
  const supabase = getSupabase(user.accessToken);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await supabase.from('todo').select('*');
      setTodos(data);
    };

    fetchTodos();
    // Add your logic to fetch designs here
  }, []);

  return (
    <div className={styles.container}>
      <p>
        Welcome {user.name}!{' '}
        <a href="/api/auth/logout">Logout</a>
      </p>
      {todos?.length > 0 ? (
        todos.map((todo) => <p key={todo.id}>{todo.title}</p>)
      ) : (
        <p>You have completed all todos!</p>
      )}
      {/* Add your designs display logic here */}
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired();
