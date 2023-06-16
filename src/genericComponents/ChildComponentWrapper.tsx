export interface WrapperProps {
  children: any
  label: string
}

const ChildComponentWrapper = ({ label, children }: WrapperProps) => {
  return (
    <>
      <div>{label}</div>
      <div style={{ border: 'solid', padding: 5 }}>{children}</div>
    </>
  )
}

export default ChildComponentWrapper
