import { useCountdown } from "@/hooks/use-countdown";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className={`flex justify-center space-x-4 ${className}`} data-testid="countdown-timer">
      <div className="text-center">
        <div className="countdown-digit text-3xl md:text-4xl" data-testid="countdown-days">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground">DAYS</div>
      </div>
      <div className="text-center">
        <div className="countdown-digit text-3xl md:text-4xl" data-testid="countdown-hours">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground">HOURS</div>
      </div>
      <div className="text-center">
        <div className="countdown-digit text-3xl md:text-4xl" data-testid="countdown-minutes">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground">MINUTES</div>
      </div>
      <div className="text-center">
        <div className="countdown-digit text-3xl md:text-4xl" data-testid="countdown-seconds">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-muted-foreground">SECONDS</div>
      </div>
    </div>
  );
}
