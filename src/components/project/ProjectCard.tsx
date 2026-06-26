"use client"

import { HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'


export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof React.JSX.IntrinsicElements }) {
  const isInternal = project.link.href.startsWith('/')
  const baseHref = isInternal || project.link.href.startsWith('http') || project.link.href.startsWith('#')
    ? project.link.href
    : `https://${project.link.href}`
  const utmLink = (!isInternal && utm_source)
    ? `${baseHref}${baseHref.includes('?') ? '&' : '?'}utm_source=${utm_source}`
    : baseHref
  let Component = titleAs ?? 'h2'
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex items-center justify-start flex-shrink-0">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={96}
                  height={36}
                  sizes='96px'
                  className="h-9 w-auto max-w-[96px] object-contain object-left"
                />
              ) : isInternal ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted border border-muted-foreground/20 text-sm font-semibold text-muted-foreground">
                  {project.name.charAt(0)}
                </div>
              ) : (
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${baseHref}&sz=32`}
                  alt={`${project.name} favicon`}
                  width={32}
                  height={32}
                  sizes='32px'
                  className="h-8 w-8 rounded-md object-contain"
                />
              )}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={utmLink}
          {...(!isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
          className='absolute overflow-auto inset-0 z-20'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}