import { Label } from "../components/ui/label";
import { Input } from "./ui/input";

export default function Component({ quantityLabel = "Name?" }) {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Label htmlFor="quantity">{quantityLabel}</Label>
            <Input type="number" id="quantity" defaultValue="0" min="0" />
        </div>
    );
}