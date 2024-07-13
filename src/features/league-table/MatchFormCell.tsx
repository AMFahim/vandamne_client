import MatchFormRecord, { GameResult } from './MatchFormRecord';

const MatchFormCell = ({ form, small }: { form: string; small?: boolean }) => (
  <div className="flex gap-1 pl-4">
    {form.split('').map((lastN, index) => (
      <MatchFormRecord
        key={index.toString() + lastN}
        record={lastN as GameResult}
        small={small}
      />
    ))}
  </div>
);

export default MatchFormCell;
