const bookCategory = () => {
  const options = ['Fantasy', 'Philosophy', 'ScienceFiction'];
  return options.map((o) => (
    <option key={o}>{o}</option>
  ));
};

export default bookCategory;
