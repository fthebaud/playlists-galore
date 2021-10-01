import React from 'react';
import { FixedSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

type Props = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: any[];
  loadNextPage: () => any;
};

const InfiniteGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}: Props) => {
  console.log('RENDER', {
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
  });

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.<
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  const Item = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = 'Loading...';
    } else {
      content = items[index].name;
    }

    return <div style={style}>{content}</div>;
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeGrid
          // itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
          //
          columnCount={4}
          columnWidth={300}
          height={800}
          rowCount={1000}
          rowHeight={300}
          width={300}
        >
          {Item}
        </FixedSizeGrid>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteGrid;
