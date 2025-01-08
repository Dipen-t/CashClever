"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

export function Chart({ children, className, ...props }) {
  return (
    <div className={cn("h-[350px] w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

Chart.Header = function ChartHeader({ children, className, ...props }) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  )
}

Chart.Title = function ChartTitle({ children, className, ...props }) {
  return (
    <h3
      className={cn("text-sm font-medium text-muted-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

Chart.Content = function ChartContent({ children, className, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

export function ChartTooltip({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Chart.Tooltip = function ChartTooltip({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ChartContainer({ children, config, className, ...props }) {
  return (
    <div
      className={cn("h-[350px] w-full", className)}
      style={{
        "--chart-1": "var(--primary)",
        "--chart-2": "var(--primary)",
        "--chart-3": "var(--primary)",
        "--chart-4": "var(--primary)",
        "--chart-5": "var(--primary)",
        ...Object.entries(config ?? {}).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`--color-${key}`]: value.color,
          }),
          {}
        ),
      }}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
  ...props
}) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "rounded-lg border bg-background px-3 py-2 shadow-sm",
        className
      )}
      {...props}
    >
      {!hideLabel && (
        <p className="mb-1 text-xs">{label}</p>
      )}
      <div className="grid gap-2">
        {payload.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <p
              className="text-sm font-medium"
              style={{
                color: item.color ?? `var(--color-${item.dataKey})`,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

