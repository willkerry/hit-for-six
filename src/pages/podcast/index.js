import React from "react";

import Layout from "../../components/Layout";
import PodcastRoll from "../../components/PodcastRoll";

export default class PodcastIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container is-max-desktop">
              <div className="columns is-vcentered">
                <div className="column is-1">
                  <svg height="auto" width="auto" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m468.432 1c-290.201 16.348-510.192 290.968-461.713 577.79 27.7 179.466 157.944 334.8 329.987 392.86 292.614 106.361 624.074-98.975 659.045-408.53 40.655-309.746-216.106-581.701-527.319-562.12zm94.532 127.36a431.553 431.553 0 0 1 47.72 4.778c2.375.276 3.557 1.224 3.983 3.589 1.9 12.956 5.637 25.68 6.53 38.725l-34.466-3.57c8.973 49.111 18.336 97.358 27.451 146.032l-42.727 3.175c-9.405-49.72-18.779-99.27-28.185-149-12.054-.472-23.617 1.58-35.744 2.213-2.722-14.383-5.4-28.518-8.194-43.3a368.277 368.277 0 0 1 63.632-2.646zm18.091 354.183c.252 56.134-40.08 105.729-96.191 108.387-112.811-1.762-121.2-202.01-2.841-210.492.645-.043 1.291-.077 1.937-.106l.149-.008c46.682-2.005 94.891 32.631 96.946 102.215zm-90.784-350.395c12.325 65.075 24.6 129.868 36.929 194.982l-43.2 8.252c-12.443-65.025-24.71-129.8-37.193-194.939a388.507 388.507 0 0 1 43.464-8.295zm-165.962 54.952c5.069 22.995 9.186 45.634 14.008 68.474l58.575-22.643-14.084-72.441a427.486 427.486 0 0 1 41.633-14.177c1.715 3.21 37 185.181 37.621 194.1l-42.273 11.132-15.173-78.645c-20.072 6.255-39.284 13.14-58.739 21 4.909 25.333 9.786 50.5 14.729 76.013l-39.977 14.108c-11.758-58.238-23.466-116.231-35.252-174.6 12.714-7.911 25.271-15.34 38.932-22.321zm-4.224 438.428-34.706-182.6c28.606-9.665 57.239-18.89 86.664-27.845 2.744 14.407 5.356 28.121 8.058 42.31l-48.351 13.925c1.928 10.152 3.787 19.939 5.75 30.27 14.945-2.8 29.159-7.535 43.9-11.2 3.01 14.2 5.5 28.195 8.136 42.742l-43.978 10.928c4.64 24.888 9.226 49.491 13.906 74.6-13.03 3.027-26.019 4.964-39.379 6.874zm182.315 171.358a75.615 75.615 0 0 1 -39.018 53.624c-20.824 10.924-46.911 11.548-71.138-4.755l9.814-44.323c39.386 33.051 77.108-8.2 45.81-25.113-22.263-6.16-51.493-1.991-63.616-26.518-31.155-68.174 17.35-120.809 87.927-97.943-3.1 14.5-6.148 28.772-9.3 43.538-30.721-19.871-64.836 13.975-31.884 27.81 27.609 3.254 64.39 4.026 69.206 38.6a76.093 76.093 0 0 1 2.199 35.08zm25.564 24.128c-16.234-61.214-24.082-124.614-37.509-186.46l42.545-14.041 35.523 180.287zm166.742-101.306a6.352 6.352 0 0 1 -3.415 1.592 5.778 5.778 0 0 1 -3.56-1.13c-12.824-8.345-25.842-15.87-38.552-24.455-4.386 12.211-8.573 24.445-12.717 36.7-3.515 10.39-7 20.791-10.545 31.2a11.666 11.666 0 0 1 -5.5 6.957c-15.361 8.231-29.548 18.736-45.437 25.83 13.572-40.794 28.046-81.134 42.869-121.818a864.927 864.927 0 0 1 -67.405-60.105l51.657-18.807 32.535 33.041c3.233-8.974 5.879-18.04 8.457-27.137 1.905-6.724 3.774-13.465 5.811-20.2a7.675 7.675 0 0 1 5.275-5.645c15.31-5.593 29.785-11.9 45.268-17.212-2.984 7.945-5.891 15.735-8.752 23.449q-1.83 4.937-3.637 9.836c-2.472 6.7-4.918 13.376-7.356 20.066q-.942 2.583-1.882 5.171-1.625 4.475-3.251 8.973c-2.861 7.916-5.73 15.91-8.64 24.071 5.113 3.508 10.206 6.846 15.331 10.02 1.95 1.208 3.9 2.4 5.865 3.557q6.406 3.779 12.95 7.181c1.93 1 3.879 1.965 5.837 2.914q3.024 1.466 6.1 2.848 1.668.748 3.357 1.472a214.417 214.417 0 0 0 21.638 7.971c-13.571 12.01-28.319 22.157-42.301 33.66zm-1.189-197.836a8.115 8.115 0 0 1 -4.055.388 6.984 6.984 0 0 1 -3.657-2.233c-8.5-9.112-17.353-17.92-26.073-26.841q-4.359-4.459-8.658-8.974c-3.813-4.018-7.569-8.087-11.224-12.242l-1.19.648c4.117 20.526 8.235 41.052 12.48 62.213l-41.449 13.253c-12.071-60.275-23.684-120.167-35.191-180.484 20.856-3.271 41.164-4.628 62.061-6.553a64.308 64.308 0 0 1 37.434 7.931c32.438 16.83 42.958 74.419 4.062 89.716a752 752 0 0 0 59.233 49.9c-14.575 4.958-29.165 8.555-43.773 13.278z"/><path d="m453.536 447.294c-19.036 23.706-14.936 60.181 5.764 80.476 36.53 33.4 77.341-6.069 75.609-43.753 3.291-45.509-52.101-74.954-81.373-36.723z"/><path d="m625.307 398.44c-.37.058-.668.577-1.089.963 2.725 13.843 5.451 27.693 8.276 42.048 11.3-1.569 24.763-4.318 28-16.7 4.086-21.112-17.427-30.79-35.187-26.311z"/></g></svg>
                </div>
                <div className="column is-11">
                  <h1 className="title">The Podcast</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
              <PodcastRoll />
        </section>
      </Layout>
    );
  }
}
