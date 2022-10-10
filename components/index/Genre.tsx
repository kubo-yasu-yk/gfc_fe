interface Props {
  genres: { name: string; src: string }[][];
}

export function Genre(props: Props) {
  return (
    <div class="mx-4 border rounded-[5px]">
      <div class="flex flex-col last:border-b-0 ">
        {props.genres.map((pairGenre) => (
          <div class="flex flex-row border-b last:border-b-0">
            {pairGenre.map((genre) => (
              <a class="py-2 flex flex-row items-center border-r last:border-r-0 w-[50%]">
                <img
                  src={`${genre.src}`}
                  alt="写真"
                  class="w-8 h-8 rounded-[5px] mx-4"
                />
                <p class="text-xs">{genre.name}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
