import clsx from 'clsx';
import { Card, CardContent, CardFooter } from "@components/ui/card"
import { Button } from "@components/ui/button"
import Image from "next/image"

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <Card className="w-[300px] transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="relative">
          <span className="absolute right-2 top-2 bg-[#F5F1E4] px-2 py-1 text-xs font-semibold">
            NEW
          </span>
          {props.src ? (
            // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
            <Image
              className={clsx('relative h-full w-full object-contain', {
                'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
              })}
              {...props}
            />
          ) : null}

          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Davidoff Year of the Snake"
            className="h-[300px] w-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="text-center">
            <p className="text-sm uppercase text-muted-foreground">DAVIDOFF</p>
            <h3 className="mt-2 text-lg font-semibold leading-tight">
              YEAR OF THE SNAKE FLAGSHIP
              <br />
              EXCLUSIVE LIMITED EDITION
            </h3>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span>52</span>
              <span className="text-muted-foreground">|</span>
              <span>2.1cm</span>
            </div>
            <div className="flex items-center gap-1">
              <span>6&quot; | 15.2cm</span>
            </div>
            <div className="flex items-center gap-1">
              <span>50-70min</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>INTENSITY</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i <= 3 ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <span>FORMAT TORO</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-[#C69C6D] hover:bg-[#B38B5C]">
          SHOP NOW
        </Button>
      </CardFooter>
    </Card>
  )
}