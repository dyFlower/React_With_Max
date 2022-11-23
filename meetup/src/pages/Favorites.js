import { useContext } from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoriteContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>즐겨찾기가 없습니다. 추가해보세요.</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>즐겨찾기</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
