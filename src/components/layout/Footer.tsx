import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { SocialLinksRow } from '@/components/shared/SocialLinksRow'

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-muted pb-16 pt-10">
          <ContainerInner>
            <div className="flex flex-col items-center gap-6">
              <SocialLinksRow />
              <p className="text-sm text-muted-foreground">
                &copy; 2026 Mihir Gandecha
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
