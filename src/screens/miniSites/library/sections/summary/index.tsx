import { LibraryData } from '~/types/library';
import { SummaryMainCard } from './mainCard';

interface LibrarySummaryProps {
  data: LibraryData
  navigation?: any
}

export function LibrarySummary(props: LibrarySummaryProps) {
  return (
    <SummaryMainCard {...props} />
  );
}
