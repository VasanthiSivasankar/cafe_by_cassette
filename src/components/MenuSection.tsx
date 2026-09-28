import React, { useState, useMemo } from 'react';
import { cafeConfig, MenuItem } from '../data/cafeConfig';
import { Search, ExternalLink, Sparkles, Filter, Check, AlertCircle, ShoppingBag } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = useMemo(() => {
    return cafeConfig.menuItems.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Search match
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Dietary match
      let dietMatch = true;
      if (dietaryFilter === 'veg') {
        dietMatch = item.isVegetarian === true;
      } else if (dietaryFilter === 'non-veg') {
        dietMatch = item.isVegetarian === false;
      }

      return categoryMatch && searchMatch && dietMatch;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  // Counts for categories
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: cafeConfig.menuItems.length };
    cafeConfig.menuItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C2D37] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
            <span>Verified Cafe Fare</span>
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight mb-4 text-balance">
            Our Handcrafted Menu
          </h2>
          <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed">
            From velvety Biscoff cold coffees and Italian alfredo to fresh chocolate croissants and gourmet burgers. Sourced from our verified menus on Swiggy, Zomato, and Magicpin.
          </p>
        </div>

        {/* Live Ordering Source Bar */}
        <div className="bg-[#F4EFE6] border border-[#EADBCA] rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D9653B] font-bold uppercase mb-1">
                <ShoppingBag className="w-4 h-4" />
                <span>Live Menu & Real-Time Ordering</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4D392D]">
                Prices reflect verified listings. For real-time dish availability, seasonal chef specials, and delivery to your doorstep, order directly via:
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={cafeConfig.business.links.swiggyOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#D9653B] hover:bg-[#C2532A] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Swiggy Delivery</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={cafeConfig.business.links.swiggyDineout}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#241A15] hover:bg-[#382920] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Swiggy Dineout</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={cafeConfig.business.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-50 text-[#241A15] border border-[#EADBCA] px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Zomato</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={cafeConfig.business.links.magicpin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-50 text-[#7C2D37] border border-[#EADBCA] px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Magicpin Menu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Top Row: Search Input & Veg / Non-Veg Toggles */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#4D392D]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pasta, croissants, burgers..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EADBCA] rounded-xl text-sm text-[#241A15] placeholder:text-[#4D392D]/50 focus:border-[#D9653B] focus:ring-1 focus:ring-[#D9653B] outline-none transition-all shadow-2xs"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#4D392D]/60 hover:text-[#241A15]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Segmented Switch (Clean functional buttons) */}
            <div className="inline-flex items-center p-1 bg-[#F4EFE6] rounded-xl border border-[#EADBCA] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-white text-[#241A15] shadow-xs'
                    : 'text-[#4D392D] hover:text-[#241A15]'
                }`}
              >
                All Diets
              </button>
              
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-[#4D392D] hover:text-[#241A15]'
                }`}
              >
                <span className="w-2.5 h-2.5 border border-emerald-600 p-0.5 rounded-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 block" />
                </span>
                <span>Pure Veg</span>
              </button>

              <button
                type="button"
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-white text-[#7C2D37] shadow-xs'
                    : 'text-[#4D392D] hover:text-[#241A15]'
                }`}
              >
                <span className="w-2.5 h-2.5 border border-[#7C2D37] p-0.5 rounded-xs flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C2D37] block" />
                </span>
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Category Tabs Scrollable Horizontal Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#EADBCA]">
            {cafeConfig.menuCategories.map((cat) => {
              const count = categoryCounts[cat.categoryKey] || 0;
              const isActive = selectedCategory === cat.categoryKey;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.categoryKey)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-150 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#241A15] text-[#FAF7F2] shadow-xs'
                      : 'bg-[#F4EFE6] text-[#4D392D] hover:bg-[#EADBCA] hover:text-[#241A15]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#382920] text-[#E5A93C]' : 'bg-[#EADBCA]/60 text-[#4D392D]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-[#EADBCA] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Item Row: Dietary Indicator + Special Badge + Price */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      {/* Standard Indian Veg/Non-Veg icon */}
                      {item.isVegetarian !== undefined && (
                        <div
                          className={`w-4 h-4 border p-0.5 rounded-xs flex items-center justify-center shrink-0 ${
                            item.isVegetarian ? 'border-emerald-600' : 'border-[#7C2D37]'
                          }`}
                          title={item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-2 h-2 rounded-full block ${
                              item.isVegetarian ? 'bg-emerald-600' : 'bg-[#7C2D37]'
                            }`}
                          />
                        </div>
                      )}

                      {item.isChefSpecial && (
                        <span className="text-[10px] font-mono uppercase font-bold text-[#D9653B] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Special</span>
                        </span>
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="text-right">
                      {item.price !== null ? (
                        <span className="font-mono text-base font-bold text-[#241A15] tabular-nums">
                          {item.currency}{item.price}
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-[#7C2D37] font-semibold">
                          Seasonal / Verify on App
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dish Title */}
                  <h3 className="font-serif text-lg font-bold text-[#241A15] group-hover:text-[#D9653B] transition-colors mb-2">
                    {item.name}
                  </h3>

                  {/* Dish Description */}
                  <p className="text-xs sm:text-sm text-[#4D392D] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Notes & Verified Source */}
                <div className="pt-3 border-t border-[#FAF7F2] flex items-center justify-between text-[11px] text-[#4D392D]/70">
                  {item.notes ? (
                    <span className="italic text-[#7C2D37] truncate max-w-[200px]" title={item.notes}>
                      {item.notes}
                    </span>
                  ) : (
                    <span className="text-emerald-700 flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" /> Verified Item
                    </span>
                  )}

                  <a
                    href={cafeConfig.business.links.swiggyOrder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#D9653B] hover:text-[#C2532A]"
                  >
                    <span>Order</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[#F4EFE6] border border-[#EADBCA] rounded-2xl p-12 text-center max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-[#D9653B] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#241A15] mb-2">No Matching Dishes Found</h3>
            <p className="text-sm text-[#4D392D] mb-6">
              We couldn't find any verified items matching "{searchQuery}" under the current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 bg-[#241A15] text-[#FAF7F2] rounded-lg text-xs font-semibold hover:bg-[#382920] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Central Data Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#7C2D37] font-mono">
          <span>* Menu items and prices reflect current public listings on delivery aggregators and may vary for dine-in or seasonal specials.</span>
        </div>

      </div>
    </section>
  );
};
