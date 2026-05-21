import { Button } from "@/components/ui/button"
import { DockDemo } from "@/components/dock"
import { LightRays } from "@/components/ui/light-rays"
import { HyperText } from "@/components/ui/hyper-text"
import { IconCloudDemo } from "@/components/icon-cloud-demo"

export default function Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden rounded-xl border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <HyperText className="text-6xl">Hi, I'm Nipun Kaveesha. </HyperText>
        <p className="text-sm text-gray-400">
          Love building websites, exploring technology, and learning how systems
          work.
        </p>

        <div className="flex flex-col items-center justify-between gap-8 p-6 md:flex-row">
          <p className="text-sm text-gray-400 md:w-1/2">
            I have experience working on various web development projects,
            including building responsive websites and web applications using
            modern technologies.
          </p>
          <div className="flex justify-center md:w-1/2">
            <IconCloudDemo />
          </div>
        </div>
      </div>
      <DockDemo />
      <LightRays />
    </div>
  )
}
