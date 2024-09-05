const Role = ( { role }: { role: any }): JSX.Element => {
  return (
    <div key={role.title}>
      <h5 className="text-slate-300">
        { role.title }
      </h5>
      <p className="mt-2 mb-6 text-sm leading-normal">
        { role.description }
      </p>
    </div>
  )
}

export default Role;
