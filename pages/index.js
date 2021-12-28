import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Filter from 'bad-words'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data: fetchedData, error } = useSWR('/api/users', fetcher)
  const [registerError, setRegisterError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({
    email: null,
    name: null,
    password: null,
    users: []
  })
  const { users } = state
  const filter = new Filter()

  useEffect(() => {
    if (fetchedData) {
      setState((prev) => ({ ...prev, users: fetchedData }))
    }
  }, [fetchedData])

  console.log('errror', error)
  if (error)
    return (
      <div className='w-full h-full flex flex-col items-center justify-center text-lg'>
        <svg xmlns='http://www.w3.org/2000/svg' width='235' height='32' viewBox='0 0 235 32' fill='none'>
          <path
            className='logo-long-dab'
            d='M7.52,24.24a14.56,14.56,0,0,1-2.4-8.1A15,15,0,0,1,20,.93,15.09,15.09,0,0,1,20,31.1a5.34,5.34,0,0,1-2.48-.5,3.14,3.14,0,0,1-1.42-1.52,4.15,4.15,0,0,1,.71-3.68,19.36,19.36,0,0,1,2.6-3L41.15.5'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeDashoffset='1'
            pathLength='1'
          />
          <path
            className='logo-short-dab'
            d='M5.5,19.5c-8,7.5-3.57,10,1,6S25,7.5,25,7.5'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeDashoffset='1'
            pathLength='1'
          />
          <g className='logo-wordmark'>
            <path
              d='M58.0593 8.42911C56.9125 8.40971 55.7775 8.66251 54.7473 9.16676C53.7171 9.67101 52.8212 10.4123 52.133 11.3299V8.73597H50.4836V28.2889H52.3008V20.7563C52.9926 21.6126 53.8701 22.3002 54.867 22.767C55.8639 23.2339 56.9539 23.4678 58.0545 23.451C62.341 23.451 65.4336 20.2193 65.4336 15.9424C65.4336 11.6655 62.3314 8.42911 58.0593 8.42911ZM57.9299 21.6913C57.1723 21.7066 56.4196 21.5678 55.7173 21.2834C55.015 20.999 54.3777 20.575 53.8442 20.037C53.3107 19.499 52.892 18.8582 52.6135 18.1536C52.335 17.4489 52.2025 16.695 52.2241 15.9376C52.2019 15.1801 52.3339 14.4259 52.6121 13.7209C52.8903 13.016 53.309 12.3749 53.8427 11.8368C54.3763 11.2986 55.0138 10.8746 55.7165 10.5905C56.4191 10.3064 57.1721 10.1681 57.9299 10.184C61.2094 10.184 63.6068 12.6197 63.6068 15.9376C63.6359 16.6945 63.5095 17.4493 63.2355 18.1555C62.9615 18.8616 62.5457 19.5041 62.0137 20.0432C61.4817 20.5824 60.8449 21.0068 60.1425 21.2903C59.4401 21.5737 58.687 21.7102 57.9299 21.6913Z'
              fill='currentColor'
            />
            <path d='M70.7126 3.77832H68.8954V23.3168H70.7126V3.77832Z' fill='currentColor' />
            <path
              d='M87.4846 11.3108C86.8045 10.3944 85.9143 9.65479 84.8888 9.15416C83.8634 8.65352 82.7327 8.40653 81.5918 8.43394C77.3821 8.43394 74.2223 11.6224 74.2223 15.8897C74.1937 16.8693 74.364 17.8446 74.7231 18.7564C75.0822 19.6683 75.6225 20.4978 76.3115 21.1948C77.0004 21.8918 77.8236 22.4418 78.7312 22.8114C79.6388 23.1811 80.612 23.3628 81.5918 23.3455C82.7321 23.3698 83.8618 23.1214 84.8867 22.621C85.9117 22.1206 86.8023 21.3827 87.4846 20.4687V23.2928H89.1819V8.73121H87.475L87.4846 11.3108ZM81.7213 21.5763C80.9697 21.5922 80.2226 21.4552 79.5256 21.1735C78.8285 20.8918 78.196 20.4714 77.6664 19.9378C77.1368 19.4042 76.7212 18.7685 76.4448 18.0693C76.1685 17.3701 76.0371 16.6221 76.0587 15.8706C76.0587 14.3726 76.6538 12.9359 77.713 11.8767C78.7723 10.8175 80.2089 10.2224 81.7069 10.2224C83.2049 10.2224 84.6415 10.8175 85.7008 11.8767C86.76 12.9359 87.3551 14.3726 87.3551 15.8706C87.3835 16.6214 87.2578 17.37 86.9856 18.0704C86.7135 18.7707 86.3007 19.4079 85.7728 19.9425C85.2449 20.4771 84.6131 20.8979 83.9163 21.1789C83.2194 21.4599 82.4724 21.5952 81.7213 21.5763Z'
              fill='currentColor'
            />
            <path
              d='M100.334 8.51544C97.6782 8.51544 96.2254 9.35452 95.1754 10.7594V8.736H93.3582V23.3216H95.1754V15.7171C95.1754 12.5238 97.357 10.3566 99.9701 10.3566C102.66 10.3566 105.062 11.5793 105.062 14.9596V23.3216H106.874V14.5472C106.879 10.9991 103.777 8.51544 100.334 8.51544Z'
              fill='currentColor'
            />
            <path
              d='M121.575 20.0323C121.054 20.5671 120.428 20.9887 119.737 21.2709C119.046 21.553 118.304 21.6896 117.557 21.6721C116.163 21.7118 114.808 21.2059 113.781 20.2621C112.754 19.3183 112.136 18.0111 112.058 16.6185H124.73C124.73 16.3979 124.764 16.1678 124.764 15.9472C124.764 11.7566 121.858 8.42908 117.571 8.42908C113.414 8.42908 110.264 11.6607 110.264 15.9328C110.264 20.2049 113.414 23.451 117.571 23.451C118.585 23.4706 119.591 23.2703 120.519 22.8639C121.448 22.4575 122.278 21.8546 122.951 21.0967L121.575 20.0323ZM112.096 14.9355C112.237 13.596 112.877 12.3587 113.889 11.4701C114.901 10.5815 116.211 10.1069 117.557 10.1408C120.381 10.1408 122.548 12.0107 122.961 14.9355H112.096Z'
              fill='currentColor'
            />
            <path
              d='M203.742 20.0323C203.221 20.5671 202.596 20.9887 201.904 21.2709C201.213 21.553 200.471 21.6896 199.724 21.6721C198.33 21.7118 196.975 21.2059 195.948 20.2621C194.921 19.3183 194.303 18.0111 194.225 16.6185H206.892C206.892 16.3979 206.931 16.1678 206.931 15.9472C206.931 11.7566 204.025 8.42908 199.739 8.42908C195.582 8.42908 192.427 11.6607 192.427 15.9328C192.427 20.2049 195.582 23.451 199.739 23.451C200.752 23.4706 201.758 23.2703 202.687 22.8639C203.615 22.4575 204.445 21.8546 205.118 21.0967L203.742 20.0323ZM194.263 14.9355C194.404 13.596 195.044 12.3587 196.056 11.4701C197.068 10.5815 198.378 10.1069 199.724 10.1408C202.544 10.1408 204.716 12.0107 205.128 14.9355H194.263Z'
              fill='currentColor'
            />
            <path
              d='M130.795 18.4357V10.1216H135.902V8.47225H130.795V5.66254H130.488L126.101 9.76682V10.1216H128.978V18.4932C128.978 21.4899 130.8 23.3215 133.773 23.3215H136.002V21.6338H133.998C131.937 21.6338 130.795 20.483 130.795 18.4357Z'
              fill='currentColor'
            />
            <path
              d='M144.321 14.8013C142.26 14.4656 140.485 14.1684 140.485 12.4375C140.485 10.9991 141.871 10.0401 144.019 10.0401C146.167 10.0401 147.572 10.9991 147.678 12.73H149.399C149.293 10.0833 147.251 8.4147 144.058 8.4147C140.864 8.4147 138.707 10.0689 138.707 12.495C138.707 15.6116 141.406 16.0959 143.875 16.5226C145.961 16.8726 147.927 17.2418 147.927 19.1837C147.927 20.7851 146.383 21.768 144.163 21.768C141.943 21.768 140.366 20.7419 140.212 18.8912H138.433C138.587 21.7009 140.744 23.4558 144.105 23.4558C147.467 23.4558 149.725 21.744 149.725 19.1405C149.725 15.6883 146.819 15.2088 144.321 14.8013Z'
              fill='currentColor'
            />
            <path
              d='M180.986 11.3347C180.284 10.4075 179.371 9.66047 178.323 9.15529C177.275 8.65011 176.122 8.4012 174.959 8.42908C170.721 8.42908 167.537 11.6415 167.537 15.9424C167.509 16.9289 167.68 17.911 168.042 18.8293C168.404 19.7475 168.948 20.5829 169.642 21.2848C170.336 21.9866 171.165 22.5405 172.079 22.9128C172.993 23.2852 173.973 23.4682 174.959 23.451C176.119 23.4787 177.27 23.2327 178.317 22.7329C179.364 22.233 180.279 21.4935 180.986 20.5741V23.3311H182.621V8.46744H180.986V11.3347ZM175.094 21.6913C174.336 21.7072 173.583 21.5689 172.88 21.2848C172.178 21.0007 171.54 20.5766 171.007 20.0385C170.473 19.5003 170.054 18.8593 169.776 18.1543C169.498 17.4494 169.366 16.6952 169.388 15.9376C169.366 15.1802 169.499 14.4264 169.777 13.7217C170.056 13.017 170.475 12.3763 171.008 11.8383C171.542 11.3003 172.179 10.8762 172.881 10.5919C173.583 10.3075 174.336 10.1687 175.094 10.1839C178.373 10.1839 180.766 12.6197 180.766 15.9376C180.766 19.2556 178.364 21.6913 175.094 21.6913Z'
              fill='currentColor'
            />
            <path d='M188.811 3.77832H186.994V23.3168H188.811V3.77832Z' fill='currentColor' />
            <path
              d='M163.927 19.8406C163.406 20.4362 162.76 20.9105 162.037 21.2302C161.313 21.55 160.527 21.7074 159.736 21.6914C158.986 21.6956 158.243 21.5486 157.551 21.2591C156.859 20.9696 156.232 20.5436 155.709 20.0066C155.185 19.4695 154.775 18.8324 154.503 18.1333C154.231 17.4342 154.103 16.6875 154.126 15.9377C154.126 12.6725 156.524 10.184 159.736 10.184C160.478 10.1716 161.214 10.3072 161.902 10.583C162.591 10.8588 163.217 11.2693 163.745 11.7903L165.298 10.8937C164.611 10.0972 163.755 9.46275 162.794 9.03583C161.832 8.60891 160.788 8.4001 159.736 8.42438C158.747 8.40456 157.763 8.58575 156.846 8.957C155.928 9.32824 155.095 9.88181 154.398 10.5842C153.7 11.2866 153.153 12.1232 152.788 13.0434C152.423 13.9636 152.249 14.9482 152.276 15.9377C152.252 16.9263 152.428 17.9095 152.793 18.8282C153.159 19.7469 153.707 20.5821 154.404 21.2836C155.101 21.985 155.933 22.5382 156.849 22.9099C157.765 23.2816 158.748 23.464 159.736 23.4463C160.839 23.4701 161.933 23.2378 162.931 22.7678C163.93 22.2977 164.805 21.6027 165.49 20.7372L163.927 19.8406Z'
              fill='currentColor'
            />
          </g>
        </svg>
        <div className='text-red my-2 p-1 rounded bg-red border font-medium'>
          An error occurred while connecting to your database
        </div>
        <div className='mx-2'>
          Please make sure to follow the steps on the example repository{' '}
          <a
            target='_blank'
            className='text-blue hover:underline'
            href='https://github.com/planetscale/vercel-integration-example#setup-database'
            rel='noreferrer'
          >
            README
          </a>{' '}
          to connect to your <span className='font-semibold'>PlanetScale</span> database
        </div>
      </div>
    )
  if (!fetchedData)
    return (
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='spinner inline-block relative h-3 w-3'>
          <div className='spinner-ring'></div>
          <div className='spinner-ring'></div>
          <div className='spinner-ring'></div>
          <div className='spinner-ring'></div>
        </div>
        <div className='mt-1'>Loading users...</div>
      </div>
    )

  const handleOnChange = (event) => {
    const { target } = event

    if (target.name == 'email') {
      setState((prev) => ({ ...prev, email: target.value }))
    } else if (target.name == 'name') {
      setState((prev) => ({ ...prev, name: target.value }))
    } else if (target.name == 'password') {
      setState((prev) => ({ ...prev, password: target.value }))
    }
  }

  const registerUser = async (event) => {
    setLoading(true)
    event.preventDefault()

    const res = await fetch('api/users', {
      body: JSON.stringify({
        email: filter.clean(state.email),
        password: filter.clean(state.password),
        name: filter.clean(state.name)
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    if (res.status == 201) {
      const json = await res.json()
      setState((prev) => ({ ...prev, users: [json, ...users] }))
    } else {
      const error = await res.text()
      setRegisterError(error)
    }
    setLoading(false)
  }

  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full'>
        {registerError && (
          <div className='flex items-center font-medium tracking-wide text-red-500 bg-red-100'>{error}</div>
        )}

        <form className='max-w-md mb-6 sm:mb-8 lg:mb-10' onSubmit={registerUser}>
          <input type='hidden' name='remember' value='true' />

          <div>
            <h1 className='text-lg font-semibold text-primary'>Users demo</h1>
            <p className='mb-3 text-secondary'>
              This app is deployed to vercel and connected to your PlanetScale database. The example project can be
              found{' '}
              <a className='text-blue' href='https://github.com/planetscale/vercel-integration-example'>
                here
              </a>
              .
            </p>
          </div>

          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={handleOnChange}
              id='name'
              name='name'
              type='text'
              required
              className='w-full px-1.5 py-sm rounded text-base ring-offset-0 border h-button shadow-sm focus-ring bg-secondary text-primary border-secondary'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email-address'>Email address</label>
            <input
              onChange={handleOnChange}
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='w-full px-1.5 py-sm rounded text-base ring-offset-0 border h-button shadow-sm focus-ring bg-secondary text-primary border-secondary'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              onChange={handleOnChange}
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='w-full px-1.5 py-sm rounded text-base ring-offset-0 border h-button shadow-sm focus-ring bg-secondary text-primary border-secondary'
            />
          </div>
          <div>
            <button
              disabled={loading}
              type='submit'
              className={`${
                loading && 'disabled:opacity-50'
              } box-border relative inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded flex-shrink-0 transition select-none overflow-hidden focus-ring bg-gray-800 hover:bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 cursor-pointer hover:text-white h-button py-1.5 px-2`}
            >
              {loading ? 'Adding...' : 'Add demo user'}
            </button>
          </div>
        </form>

        {users.length > 0 && (
          <table className='table-auto'>
            <thead>
              <tr>
                <th className='w-6/12' scope='col'>
                  Name
                </th>
                <th className='w-6/12' scope='col'>
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
