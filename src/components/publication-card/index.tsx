import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { SanitizedPublication } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="w-full md:w-1/3 h-48 md:h-auto">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                className: 'rounded-t-lg md:rounded-l-lg md:rounded-tr-none',
              })}
            </div>
            <div className="p-8 w-full md:w-2/3">
              <div className="flex flex-col">
                <div className="w-full">
                  <h2 className="mb-2">
                    {skeleton({
                      widthCls: 'w-3/4',
                      heightCls: 'h-8',
                      className: 'mb-2',
                    })}
                  </h2>
                  <div className="mb-2">
                    {skeleton({ widthCls: 'w-1/2', heightCls: 'h-4' })}
                  </div>
                  <div className="space-y-2">
                    {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                    {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                    {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  const renderPublications = () => {
    return publications.map((item, index) => (
      <div
        className="card shadow-lg compact bg-base-100 overflow-hidden"
        key={index}
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/3 relative h-64 md:h-auto">
            <LazyImage
              src={(item as any).imageUrl || 'public/robot.jpeg'}
              alt={item.title}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              placeholder={skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
                className: 'rounded-t-lg md:rounded-l-lg md:rounded-tr-none',
              })}
            />
          </div>

          <div className="p-8 w-full md:w-2/3">
            <div className="flex items-start flex-col">
              <div className="w-full">
                <div className="px-0 md:px-4">
                  <div className="w-full">
                    <h2 className="font-medium opacity-60 mb-2 text-lg">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors cursor-pointer"
                      >
                        {item.title}
                      </a>
                    </h2>

                    {item.conferenceName && (
                      <i>
                        <p className="text-base-content opacity-50 text-sm mb-1">
                          {item.conferenceName}
                        </p>
                      </i>
                    )}
                    {item.journalName && (
                      <p className="text-base-content opacity-50 text-sm mb-1">
                        {item.journalName}
                      </p>
                    )}

                    {item.authors && (
                      <p className="text-base-content opacity-50 text-sm mb-2">
                        {item.authors.split(',').map((author, i, arr) => {
                          const trimmedAuthor = author.trim();
                          const isTarget = trimmedAuthor === 'Alexandre Chapin';
                          const isFirst = i === 0;

                          return (
                            <span key={i}>
                              {isTarget ? (
                                <span className="font-bold text-base-content opacity-100">
                                  {trimmedAuthor}
                                  {isFirst && '*'}
                                </span>
                              ) : (
                                <span>
                                  {trimmedAuthor}
                                  {isFirst && '*'}
                                </span>
                              )}
                              {i < arr.length - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                      </p>
                    )}

                    {item.description && (
                      <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                        {item.description}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          [Paper]
                        </a>
                      )}
                      {(item as any).code && (
                        <a
                          href={(item as any).code}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                        >
                          [Code]
                        </a>
                      )}
                      {(item as any).project && (
                        <a
                          href={(item as any).project}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                        >
                          [Project Page]
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Publications
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {loading ? renderSkeleton() : renderPublications()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;