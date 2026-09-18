import { Button } from "@/components/ui/button"
import MoltenMetal from "@/components/MoltenMetal"

export default function Page() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-slate-950 text-white">
      <MoltenMetal
        className="pointer-events-none absolute inset-0 z-0"
        color1="#18073d"
        color2="#7c2d12"
        color3="#fbbf24"
        backgroundColor="#020617"
        glow={1.9}
        mouseInteraction={false}
        scale={3.5}
      />
      <div className="relative z-10 flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>Hola, que tal estas</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        </div>
      </div>
    </main>
  )
}
