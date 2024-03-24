import { TabsWrap, TabsList, RenderBlock } from './Tabs.styled';
import Features from '../Features/Features';

import Reviews from '../Reviews/Reviews';
import BookForm from '../BookForm/BookForm';

const Tabs = ({ card, activeTab, setActiveTab }) => {
  return (
    <TabsWrap>
      <TabsList>
        <li>
          <button
            type="button"
            aria-label="Show features"
            className={activeTab === 'features' ? 'active' : ''}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
        </li>

        <li>
          <button
            type="button"
            aria-label="Show reviews"
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </li>
      </TabsList>

      <hr />

      {activeTab === 'features' ? (
        <RenderBlock>
          <Features card={card} />
          <BookForm />
        </RenderBlock>
      ) : (
        <RenderBlock>
          <Reviews card={card} />
          <BookForm />
        </RenderBlock>
      )}
    </TabsWrap>
  );
};

export default Tabs;
