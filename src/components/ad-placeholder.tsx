import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function AdPlaceholder({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full max-w-sm h-24 flex items-center justify-center bg-muted/50 border-dashed", className)}>
      <p className="text-muted-foreground text-sm font-medium">Advertisement</p>
    </Card>
  );
}
