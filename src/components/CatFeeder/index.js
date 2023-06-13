const CatFeeder = props => {
  const { switchOff, catToFeed } = props;
  const [batteryLife, setBatteryLife] = useState(null);

  useEffect(() => {
    feedCats();
  }, []);

  function feedCats() {
    setBatteryLife(prevBatteryLife => prevBatteryLife - 5);
  }

  useEffect(() => {
    if (batteryLife === 0) {
      switchOff();
    }
  }, [batteryLife]);

  return (
    <div>
      <h1>The ultimate cat feeder</h1>
      <p>Currently feeding: {catToFeed}</p>
    </div>
  );
};
