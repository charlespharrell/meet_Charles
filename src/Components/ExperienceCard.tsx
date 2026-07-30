type ExperienceProps = {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
};

function ExperienceCard({
  year,
  role,
  company,
  location,
  description,
  skills,
}: ExperienceProps) {
 return (
  <div
className="
group
relative
overflow-hidden

rounded-[28px]

border

border-[#3f3659]

bg-linear-to-br
from-[#1b1b20]
via-[#17171b]
to-[#121215]

p-4 lg:p-8

shadow-
[
inset_0_2px_3px_rgba(255,255,255,0.06),

inset_0_-12px_25px_rgba(0,0,0,0.75),

0_18px_40px_rgba(0,0,0,0.35)
]

transition-all
duration-500
border-(--border)

lg:hover:border-(--accent)
hover:-translate-y-2
hover:border-(--accent)

"
    // className="
    //   relative
    //   overflow-hidden

    //   rounded-3xl

    //   border
    //   border-(--border)

    //   bg-(--card)

    //   lg:p-8 p-4

    //   shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),inset_0_-8px_18px_rgba(0,0,0,0.28)]

    //   transition-all
    //   duration-500

    //   hover:-translate-y-2
    //   hover:border-(--accent)
    //   hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]
    // "
  >
    <div
  className="
absolute
inset-0

rounded-[28px]

border

border-white/5

pointer-events-none
"
/>
<div
  className="
absolute

left-0
top-0

h-full
w-full

bg-linear-to-br

from-white/3
via-transparent
to-transparent

pointer-events-none
"
/>
    <div
  className="
    absolute
    right-6
    top-4

    text-7xl
    font-black

    text-white/5

    select-none
    pointer-events-none
  "
>
  {year.slice(0, 4)}
</div>
    {/* Year */}

    <span
      className="
        text-sm
        font-semibold
        tracking-wider
        uppercase
        text-(--accent)
      "
    >
      {year}
    </span>

    {/* Role */}

    <h3
      className="
        mt-3
        text-3xl
        font-bold
      "
    >
      {role}
    </h3>

    {/* Company */}

    <p
      className="
        mt-2
        text-zinc-400
      "
    >
      {company} • {location}
    </p>

    {/* Description */}

    <p
      className="
        mt-6
        leading-8
        text-zinc-400
      "
    >
      {description}
    </p>

    {/* Skills */}

    <div
      className="
        mt-8
        flex
        flex-wrap
        gap-3
      "
    >
      {skills.map((skill) => (
        <span
          key={skill}
          className="
            rounded-full

            border
            border-(--border)

            bg-(--hover-bg)

            px-4
            py-2

            text-sm

            transition-all
            duration-300

            hover:border-(--accent)
            hover:text-(--accent)
          "
        >
          {skill}
        </span>
      ))}
    </div>
  
 
  </div>
);
}

export default ExperienceCard;