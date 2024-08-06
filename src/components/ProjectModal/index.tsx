'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button, buttonVariants } from '../ui/button';
import { ProjectData } from '../../utils/types';
// import { getDataFromSanity, urlFor } from '../../../sanity/sanity-utils';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'
import { PortableText } from '@portabletext/react';
import Link from 'next/link';


interface Props {
  data: ProjectData
}


export default function ProjectModal({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(true);
  }, [router]);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { router.back() } }} >
        <DialogContent>
          <div className='flex flex-col lg:flex-row grid-cols-2 justify-center max-h-[90vh] lg:max-h-[80vh] md:min-h-[45vh] w-full'>
            <div className='px-2 sm:px-10 lg:px-5 my-5 flex justify-center items-center w-full lg:max-w-lg'>
              <Image src={data.image} alt="project-image" width={470} height={380} className='rounded-xl w-full object-cover h-auto lg:h-[380px]'/>
            </div>
            <div className='px-2 sm:px-10 lg:px-5 lg:w-[34rem] leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base text-slate-400 font-roboto_mono'>
              <h4 className=' mb-2'>{data.category}</h4>
              <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 mb-5'>{data?.title}</h2>
              <div className=' mb-4'>
                {/* <PortableText value={data?.description}/> */}
                <div>{data.description}</div>
              </div>
              <p className='mb-6'>Technologies Used:
                <span>
                  {
                    data.technologies?.map((item, i, arr) => (
                      ` ${item.name}${(i + 1 !== arr.length) ? ',' : ''}`
                    ))
                  }
                </span>
              </p>
              {data.githubUrl && <Link href={data.githubUrl} className={buttonVariants({ variant: 'secondary' })}>View Repo</Link>}
              {data.liveUrl && <Link className={buttonVariants({ variant: 'secondary' })} href={data.liveUrl}>View Demo</Link>}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
