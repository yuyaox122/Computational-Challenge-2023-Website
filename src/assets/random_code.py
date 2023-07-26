def get_r(a, epsilon, theta):
  return (a * (1 - epsilon ** 2)) / (1 - epsilon * math.cos(theta))

class TwoDInnerOrbits(MovingCameraScene):
    def construct(self):
        inner_axes = Axes(
            x_range = [-2, 2, 0.5],
            y_range = [-2, 2, 0.5],
            x_length = 4,
            y_length = 4,
            tips=False,
            axis_config={
                "font_size": 10
            }
        ).add_coordinates()

        self.camera.frame.save_state()
        inner_orbits = []

        sun = Circle(0.2, color="#ffd000", fill_opacity=1)

        outer_axes = Axes(
            x_range = [-40, 40, 10],
            y_range = [-40, 40, 10],
            x_length = 80,
            y_length = 80,
            tips=False,
            axis_config={
                "font_size": 200,
                "stroke_width": 20
            }
          ).add_coordinates()



        for i in range(4):
          orbit = ParametricFunction(
            lambda t: np.array([get_r(planet_values.loc[i].at['a'], planet_values.loc[i].at['eccentricities'], t) * math.cos(t), get_r(planet_values.loc[i].at['a'], planet_values.loc[i].at['eccentricities'], t) * math.sin(t), 0]),
            t_range = (0, 2 * PI , 2 * PI / 1000),
            color=planet_values.loc[i].at['colours']
            )
          orbit.scale(1.7)
          inner_orbits.append(orbit)

        inner_axes.scale(1.7)


        self.play(Write(inner_axes, lag_ratio=0.01))
        self.play(Create(sun))
        self.play(Create(VGroup(*[orbit for orbit in inner_orbits]), lag_ratio=0.4))

        outer_orbits = []

        for i in range(4):
          orbit = ParametricFunction(
            lambda t: np.array([get_r(planet_values.loc[i + 4].at['a'], planet_values.loc[i + 4].at['eccentricities'], t) * math.cos(t), get_r(planet_values.loc[i + 4].at['a'], planet_values.loc[i + 4].at['eccentricities'], t) * math.sin(t), 0]),
            t_range = (0, 2 * PI , 2 * PI / 1000),
            color=planet_values.loc[i + 4].at['colours'],
            stroke_width=50
        )
          outer_orbits.append(orbit)

        self.wait(0.3)

        self.play(Transform(inner_axes, outer_axes), self.camera.frame.animate.set(width=outer_axes.width * 2.1))
        self.play(Create(VGroup(*[orbit for orbit in outer_orbits]), lag_ratio=0.4))

        self.wait()
