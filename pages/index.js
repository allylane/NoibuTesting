import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Fragment, useState } from 'react'
import { Listbox, Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  WindowIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  ChartBarIcon,
  SettingsIcon,
  HomeIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { CheckIcon, MagnifyingGlassIcon, ChevronDownIcon, ChevronUpDownIcon, ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Issues', href: '#', icon: ExclamationCircleIcon, current: false },
  { name: 'Issue trends', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Session search', href: '#', icon: WindowIcon, current: false },
  { name: 'Alerts', href: '#', icon: BellAlertIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

const people = [
  { id: 1, name: 'staging01.dtc.levi.com' },
  { id: 2, name: 'staging02.dtc.levi.com' },
  { id: 3, name: 'staging03.dtc.levi.com' },
  { id: 4, name: 'www.levi.com' },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const issues = [
  { time: '11:49am', number: '225', revenue: '$500k', sessions: '100k' },
  { time: '11:36am', number: '224', revenue: '$450k', sessions: '70k' },
  { time: '11:32am', number: '223', revenue: '$480k', sessions: '80k' },
  { time: '11:27am', number: '222', revenue: '$460k', sessions: '90k' },
  { time: '11:20am', number: '222', revenue: '$440k', sessions: '70k' },
]

const issuesset2 = [
  { time: '11:49am', number: '225', revenue: '$500k', sessions: '100k' },
  { time: '11:36am', number: '224', revenue: '$450k', sessions: '70k' },
  { time: '11:32am', number: '223', revenue: '$480k', sessions: '80k' },
  { time: '11:27am', number: '222', revenue: '$460k', sessions: '90k' },
  { time: '11:20am', number: '222', revenue: '$440k', sessions: '70k' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selected, setSelected] = useState(people[3])


  return (
    <>
      
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col overflow-y-auto bg-slate-100 px-6 pb-4">
                    <div className="flex pt-6 pb-3 shrink-0 items-center">
                    <img
                      className="h-5 w-auto"
                      src="https://noibu.com/wp-content/uploads/2020/08/NOIBU_logo.svg"
                      alt="Noibu"
                    />
                    </div>
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm leading-6">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-blue-600 text-white' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-blue-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
                  <ul role="list" className=" space-y-1 mt-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-blue-100 text-blue-800'
                              : 'text-gray-700 hover:text-blue-800 hover:bg-blue-100',
                            'group flex gap-x-3 rounded-md p-1 text-xs leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800',
                              'w-4 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-6 w-6 rounded-full bg-gray-50"
                        src="https://media.licdn.com/dms/image/D4E03AQHvWKIlvmPUmA/profile-displayphoto-shrink_800_800/0/1677621738184?e=2147483647&v=beta&t=UVr-TJ0bsj6xwFEer8e4GSlQ9LNFilXenTDG-6ZJkP4"
                        alt=""
                      />
                      <span className="flex items-center">
                        <span className="ml-4 text-xs font-semibold leading-6 text-gray-900" aria-hidden="true">
                          Ally Lane
                        </span>
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 bottom-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-slate-100 px-6 pb-4">
            <div className="flex pt-6 shrink-0 items-center">
              <img
                className="h-5 w-auto"
                src="https://noibu.com/wp-content/uploads/2020/08/NOIBU_logo.svg"
                alt="Noibu"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-blue-600 text-white' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-blue-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
                  <ul role="list" className=" space-y-1 mt-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-blue-100 text-blue-800'
                              : 'text-gray-700 hover:text-blue-800 hover:bg-blue-100',
                            'group flex gap-x-3 rounded-md p-1 text-xs leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800',
                              'w-4 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-6 w-6 rounded-full bg-gray-50"
                        src="https://media.licdn.com/dms/image/D4E03AQHvWKIlvmPUmA/profile-displayphoto-shrink_800_800/0/1677621738184?e=2147483647&v=beta&t=UVr-TJ0bsj6xwFEer8e4GSlQ9LNFilXenTDG-6ZJkP4"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span className="ml-4 text-xs font-semibold leading-6 text-gray-900" aria-hidden="true">
                          Ally Lane
                        </span>
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 bottom-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky lg:hidden top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className='pt-1'>
            <img
              className="h-5 w-auto"
              src="https://noibu.com/wp-content/uploads/2020/08/NOIBU_logo.svg"
              alt="Noibu"
            />
            </div>
          </div>

          <main className="p-8 bg-slate-100">
          <div className='max-w-4xl m-auto mb-3 mt-0'>
          <h1 class="text-xl mb-4">
            Events
          </h1>
          <h3 className='text-base'>Today</h3>
          </div>
          {issues.map((issue) => (
          <div className="bg-white shadow rounded-md max-w-4xl m-auto mb-3">
            <div className="px-3 pt-2 pb-3 sm:p-3">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <div className="mt-1 max-w-xl text-xs font-semibold text-gray-700">
                    <div className='flex flex-row space-x-4'>
                      <p>{issue.time}</p>
                      <p><span className='text-gray-500'>New issue:</span> #{issue.number}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                    </div>
                  </div>
                </div>
                <div className="sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                <div className="text-xs font-semibold text-gray-700 mr-4 hidden sm:block">
                  <div className='flex flex-row space-x-4'>            
                  <p><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                  <p><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 inline-flex items-center rounded-md border border-slate-300 px-3 py-2 sm:px-2 sm:py-1 text-xs font-semibold text-gray-700  hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    View issue
                  </button>
                </div>
              </div>
            </div>
          </div>
              ))}

          <div className='max-w-4xl m-auto mb-3 mt-6'>
          <h3 className='text-base'>Yesterday</h3>
          </div>
        {issuesset2.map((issue) => (
          <div className="bg-white shadow rounded-md max-w-4xl m-auto mb-3">
            <div className="px-3 pt-2 pb-3 sm:p-3">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <div className="mt-1 max-w-xl text-xs font-semibold text-gray-700">
                    <div className='flex flex-row space-x-4'>
                      <p>{issue.time}</p>
                      <p><span className='text-gray-500'>New issue:</span> #{issue.number}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                    </div>
                  </div>
                </div>
                <div className="sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                <div className="text-xs font-semibold text-gray-700 mr-4 hidden sm:block">
                  <div className='flex flex-row space-x-4'>            
                  <p><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                  <p><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 inline-flex items-center rounded-md border border-slate-300 px-3 py-2 sm:px-2 sm:py-1 text-xs font-semibold text-gray-700  hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    View issue
                  </button>
                </div>
              </div>
            </div>
          </div>
              ))}

<         div className='max-w-4xl m-auto mb-3 mt-6'>
          <h3 className='text-base'>May 8, 2023</h3>
          </div>
{issues.map((issue) => (
          <div className="bg-white shadow rounded-md max-w-4xl m-auto mb-3">
            <div className="px-3 pt-2 pb-3 sm:p-3">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <div className="mt-1 max-w-xl text-xs font-semibold text-gray-700">
                    <div className='flex flex-row space-x-4'>
                      <p>{issue.time}</p>
                      <p><span className='text-gray-500'>New issue:</span> #{issue.number}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                    </div>
                  </div>
                </div>
                <div className="sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                <div className="text-xs font-semibold text-gray-700 mr-4 hidden sm:block">
                  <div className='flex flex-row space-x-4'>            
                  <p><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                  <p><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 inline-flex items-center rounded-md border border-slate-300 px-3 py-2 sm:px-2 sm:py-1 text-xs font-semibold text-gray-700  hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    View issue
                  </button>
                </div>
              </div>
            </div>
          </div>
              ))}

          <div className='max-w-4xl m-auto mb-3 mt-6'>
          <h3 className='text-base'>May 7, 2023</h3>
          </div>
{issues.map((issue) => (
          <div className="bg-white shadow rounded-md max-w-4xl m-auto mb-3">
            <div className="px-3 pt-2 pb-3 sm:p-3">
              <div className="sm:flex sm:items-start sm:justify-between">
                <div>
                  <div className="mt-1 max-w-xl text-xs font-semibold text-gray-700">
                    <div className='flex flex-row space-x-4'>
                      <p>{issue.time}</p>
                      <p><span className='text-gray-500'>New issue:</span> #{issue.number}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                      <p className='sm:hidden'><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                    </div>
                  </div>
                </div>
                <div className="sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                <div className="text-xs font-semibold text-gray-700 mr-4 hidden sm:block"> 
                  <div className='flex flex-row space-x-4'>            
                  <p><span className='text-gray-500'>Revenue lost:</span> {issue.revenue}</p>
                  <p><span className='text-gray-500'>Sessions lost:</span> {issue.sessions}</p>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 inline-flex items-center rounded-md border border-slate-300 px-3 py-2 sm:px-2 sm:py-1 text-xs font-semibold text-gray-700  hover:border-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    View issue
                  </button>
                </div>
              </div>
            </div>
          </div>
              ))}

          </main>
        </div>
      </div>
    </>
  )
}

      
