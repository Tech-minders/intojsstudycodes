function SingleUserV2(props) {
  console.log("props are ", props);
  return (
    <div>
      <div>
        <img src={props.avatar_url} />
      </div>
      <ul>
        <li>
          Name <b>{props.login}</b>
        </li>
        <li>
          Url <b>{props.url}</b>
        </li>
      </ul>
    </div>
  );
}

export default SingleUserV2;
