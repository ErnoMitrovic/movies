import { Meta, StoryFn } from "@storybook/react";

import { MovieCardProps } from "./types";
import MovieCard from "./MovieCard";

const meta = {
    title: 'Components/MovieCard',
    component: MovieCard,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: false,
                description: `This component is used to display a movie card.`,
                iframeHeight: 400,
            }
        }
    },
    argTypes: {
        title: {
            control: 'text',
        },
        genreId: {
            control: 'number',
        },
        movieId: {
            control: 'number',
        },
        voteAverage: {
            control: 'number',
        },
        posterPath: {
            control: 'text',
        }
    },
    tags: ['autodocs']
} as Meta;

export default meta;

const Template: StoryFn<MovieCardProps> = (args) => <MovieCard {...args} />;

/**
 * Default state of the MovieCard component.
 */
export const Default = Template.bind({});
Default.args = {
    title: 'Shazam, Fury of the Gods',
    genreId: 18,
    movieId: 278,
    voteAverage: 8.7,
    posterPath: 'https://image.tmdb.org/t/p/w500/wybmSmviUXxlBmX44gtpow5Y9TB.jpg'
};

/**
 * MovieCard component with a different movie title.
 */
export const DifferentTitle = Template.bind({});
DifferentTitle.args = {
    ...Default.args,
    title: 'The Batman',
};