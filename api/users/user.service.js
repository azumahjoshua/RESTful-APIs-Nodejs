const pool = require('../../config/dbconnect');

const createUser = (data, callBack) => {
    pool.query(
        'INSERT INTO Registration(username, email, password) VALUES (?, ?, ?)',
        [data.username, data.email, data.password],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            } else {
                if (results && results.affectedRows > 0) {
                    callBack(null, results);
                } else {
                    callBack({
                        message: 'Insert failed, no rows affected',
                        sqlMessage: error.sqlMessage,
                    });
                }
            }
        }
    );
};

const getUsers = (callBack) => {
    pool.query(
        'SELECT * FROM Registration',
        (error, results, fields) => {
            if (error) {
                callBack(error);
            } else {
                callBack(null, results);
            }
        }
    );
};

const getUserById = (userId, callBack) => {
    pool.query(
        'SELECT * FROM Registration WHERE id = ?',
        [userId],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            } else {
                if (results.length > 0) {
                    callBack(null, results[0]);
                } else {
                    callBack({ message: 'User not found' });
                }
            }
        }
    );
};

const updateUser = (userId, data, callBack) => {
    pool.query(
        'UPDATE Registration SET username = ?, email = ?, password = ? WHERE id = ?',
        [data.username, data.email, data.password, userId],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            } else {
                if (results.affectedRows > 0) {
                    callBack(null, { message: 'User updated successfully' });
                } else {
                    callBack({ message: 'User not found or no changes made' });
                }
            }
        }
    );
};

const deleteUser = (identifier, callBack) => {
    let deleteQuery;

    // If identifier is an integer, assume it's the user ID
    if (Number.isInteger(identifier)) {
        deleteQuery = 'DELETE FROM Registration WHERE id = ?';
    } else {
        deleteQuery = 'DELETE FROM Registration WHERE username = ?';
    }

    pool.query(
        deleteQuery,
        [identifier],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            } else {
                if (results.affectedRows > 0) {
                    callBack(null, { message: 'User deleted successfully' });
                } else {
                    callBack(null, { message: 'User not found' });
                }
            }
        }
    );
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
