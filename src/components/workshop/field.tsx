import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Field({
  id,
  label,
  hint,
  value,
  onChange,
  placeholder,
  starter,
  example,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  starter?: string;
  example?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-fg">
        {label}
      </label>
      {hint ? <p className="text-sm text-muted">{hint}</p> : null}
      {starter ? (
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm text-fg">
            <span className="font-medium">Start with: </span>
            <span className="font-display italic">{starter}</span>
          </p>
          {!value.trim() ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => onChange(starter)}
            >
              Insert starter
            </Button>
          ) : null}
        </div>
      ) : null}
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
      />
      {example ? (
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">Strong phrasing: </span>
          {example}
        </p>
      ) : null}
    </div>
  );
}
