const PersonalPreview = (props) => {
  return (
    <div>
      <label className="block">name {props.naam}</label>
      <label className="block">email {props.email}</label>
      <label className="block">phone number {props.phoneNo}</label>
    </div>
  );
};

export { PersonalPreview };
