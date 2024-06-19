import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/users';

const UserService = {
    getAllUsers: async () => {
        return await axios.get(BASE_URL);
    },
    createUser: async (user) => {
        return await axios.post(BASE_URL, user);
    },
    updateUser: async (id, user) => {
        return await axios.put(`${BASE_URL}/${id}`, user);
    },
    deleteUser: async (id) => {
        return await axios.delete(`${BASE_URL}/${id}`);
    },
};

export default UserService;
