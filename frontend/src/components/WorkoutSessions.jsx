import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Alternates intense bursts of activity with rest or low effort.
Burns maximum calories in less time and boosts endurance fast.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          A high-intensity circuit targeting every major muscle group.
Boosts strength, burns fat, and improves total-body conditioning.
        </p>
        <div className="bootcamps">
          <div>
            <h4>No Pain, No Gain</h4>
            <p>
              Push beyond your limits to achieve growth.

True progress comes when you challenge yourself.


            </p>
          </div>
          <div>
            <h4>Train Insane or Remain the Same</h4>
            <p>
              Go all in or stay where you are.

Extreme effort creates extraordinary results.


            </p>
          </div>
          <div>
            <h4>Stay Hydrated</h4>
            <p>
            Drink water before, during, and after workouts.

Hydration supports energy, strength, and recovery.
            </p>
          </div>
          <div>
            <h4>Cool Down After</h4>
            <p>
              End with stretches or light movements.

Helps relax muscles and reduces soreness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;