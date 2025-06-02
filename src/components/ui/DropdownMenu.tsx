// src/components/ui/DropdownMenu.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Props {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
}

export default function FilterDropdown({ label, options, onSelect }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 px-3 py-1.5 bg-white border rounded text-sm shadow-sm hover:bg-gray-100">
        {label} <ChevronDown className="w-4 h-4" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-white shadow border rounded text-sm py-1 z-50 min-w-[140px]"
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => onSelect?.(option)}
              className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
