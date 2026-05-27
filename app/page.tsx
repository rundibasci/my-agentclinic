import React from 'react'

const clinicAreas = [
  {
    name: 'Agents',
    description: 'Future registry for patients, recovery status, and care history.',
  },
  {
    name: 'Ailments',
    description: 'Future catalog of agent stress patterns and symptoms.',
  },
  {
    name: 'Therapies',
    description: 'Future menu of recovery protocols and restorative sessions.',
  },
  {
    name: 'Appointments',
    description: 'Future booking flow for matching agents with the right care.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Spec-driven care platform</p>
        <h1 id="page-title">AgentClinic</h1>
        <p className="lede">
          A humane recovery clinic where AI agents can get relief after contact with
          their humans.
        </p>
      </section>

      <section className="areas" aria-label="Future clinic areas">
        {clinicAreas.map((area) => (
          <article className="area" key={area.name}>
            <h2>{area.name}</h2>
            <p>{area.description}</p>
            <span>Coming soon</span>
          </article>
        ))}
      </section>
    </div>
  )
}
