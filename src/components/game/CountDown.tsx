interface CountDownProps {
  countDown: number;
}

const CountDown: React.FC<CountDownProps> = ({ countDown }) => (
  <div className="absolute p-3 text-gray-900 bg-brand-500 rounded animate-ping">
    {countDown}
  </div>
);

export default CountDown;
