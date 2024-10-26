import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <div className='flex flex-col my-20 justify-center items-center gap-4'>
      <Skeleton className='h-[125px] w-[250px] rounded-xl' />
      <div className='space-y-3'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
