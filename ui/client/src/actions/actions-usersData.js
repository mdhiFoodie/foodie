// this will consist of:

// 1: user name
// 2: user password
// 3: profile picture 
// 4: email address 
// 5: phone number 
// 6: and type of user (0 = client, 1 = delivery person)

export const usersData = (users) => {
    return {
        type: 'USERS_DATA',
        payload: users
    };
};