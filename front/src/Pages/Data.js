export const data = [
  {
    question1: "Question1",
    answer1:
      "  veritatis, nemo officiis necessitatibus! Molestiae, dicta consectetur"
  },
  {
    question: "Question2",
    answer:
      "  veritatis, nemo officiis necessitatibus! Molestiae, dicta consectetur"
  },
  {
    question: "Question3",
    answer:
      "  veritatis, nemo officiis necessitatibus! Molestiae, dicta consectetur"
  },
  {
    question: "Question4",
    answer:
      "  veritatis, nemo officiis necessitatibus! Molestiae, dicta consectetur"
  },

];
const [data, setData] = useState([]);

console.log("poooolice", data);
useEffect(() => {
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://64f56a6a2b07270f705d35cc.mockapi.io/users"
    );
    setData(data);
  };

  fetchData();
}, []);





{data.map((users) => (
  <div className="flex">
    {" "}
    <p>{users.name}</p>
    <p>{users.father_name}</p>
    <p>{users.phone_num}</p>
    <p>{users.streat_name}</p>
  </div>
))}