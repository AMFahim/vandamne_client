import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/features/common/ui/select';
import { Label } from './label';

const SelectYear = ({ value }: { value?: string }) => (
  <div className="my-2 flex flex-col gap-2 px-2 md:self-end">
    <Label>Select Season</Label>
    <Select defaultValue={value}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Select Year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export default SelectYear;
