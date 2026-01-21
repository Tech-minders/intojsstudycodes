import SingleUserV2 from "./SingleUserV2";
import users from "./../users.json";

function UsersSection() {
  const user0 = users[8];
  const user1 = users[1];
  const user2 = users[3];
  //console.log(user);
  return (
    <div>
      <SingleUserV2
        avatar_url={user0.avatar_url}
        login={user0.login}
        url={user0.url}
      />
      <SingleUserV2
        avatar_url={user1.avatar_url}
        login={user1.login}
        url={user1.url}
      />
      <SingleUserV2
        avatar_url={user2.avatar_url}
        login={user2.login}
        url={user2.url}
      />
    </div>
  );
}

export default UsersSection;
