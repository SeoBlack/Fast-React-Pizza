import { useSelector } from "react-redux"

export default function Username() {
  const userName = useSelector(state => state.user.username)
  console.log(userName)
  if(!userName) return null
  return (
    <div className='test-sm font-semibold hidden md:block'>{userName}</div>
  )
}
