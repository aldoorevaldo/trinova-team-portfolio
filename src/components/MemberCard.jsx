import { Link } from "react-router-dom"

function MemberCard({ member }) {
  const skillList = Object.values(member.skills)
    .flat()
    .slice(0, 3)

  return (
    <article className="group overflow-hidden rounded-2xl border border-trinova-border bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
      
      {/* Photo */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-trinova-surface">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="pt-5">
        <h3 className="text-lg font-semibold text-trinova-text">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-trinova-accent">
          {member.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-trinova-muted">
          {member.shortBio}
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Profile Link */}
        <Link
          to={`/profile/${member.id}`}
          className="mt-5 inline-flex items-center text-sm font-semibold text-trinova-accent transition hover:text-trinova-accent-hover"
        >
          View Profile
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  )
}

export default MemberCard