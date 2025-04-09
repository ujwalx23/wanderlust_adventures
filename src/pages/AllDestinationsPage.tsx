
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DestinationCard from '@/components/featured/DestinationCard';
import CategoryFilter from '@/components/featured/CategoryFilter';
import SearchBox from '@/components/shared/SearchBox';
import { destinations } from '@/constants/destinations';
import { Destination } from '@/constants/destinations';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 12;

const AllDestinationsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialPage = Number(searchParams.get('page') || '1');
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let filtered = destinations;
    
    if (selectedCategory !== 'All') {
      filtered = destinations.filter(dest => dest.category === selectedCategory);
    }
    
    setFilteredDestinations(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    
    // Reset to page 1 when category changes
    if (selectedCategory !== initialCategory) {
      setCurrentPage(1);
    }
    
    // Update URL search params
    if (selectedCategory === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    
    if (currentPage === 1) {
      searchParams.delete('page');
    } else {
      searchParams.set('page', currentPage.toString());
    }
    
    setSearchParams(searchParams);
  }, [selectedCategory, currentPage, initialCategory, searchParams, setSearchParams]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Calculate current destinations to display
  const currentDestinations = filteredDestinations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              All Travel Destinations
            </h1>
            <p className="text-gray-600">
              Discover India's enchanting destinations, from historic monuments to pristine beaches, spiritual retreats, and adventurous landscapes.
            </p>
          </div>
          
          <div className="mb-6">
            <SearchBox className="max-w-2xl mx-auto" />
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          {currentDestinations.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {currentDestinations.map(destination => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {currentPage > 2 && totalPages > 5 && (
                      <>
                        <PaginationItem>
                          <PaginationLink href="#" onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(1);
                          }}>
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 3 && <PaginationEllipsis />}
                      </>
                    )}
                    
                    {getPageNumbers().map(number => (
                      <PaginationItem key={number}>
                        <PaginationLink 
                          href="#"
                          isActive={currentPage === number}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(number);
                          }}
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages - 1 && totalPages > 5 && (
                      <>
                        {currentPage < totalPages - 2 && <PaginationEllipsis />}
                        <PaginationItem>
                          <PaginationLink href="#" onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(totalPages);
                          }}>
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No destinations found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllDestinationsPage;
