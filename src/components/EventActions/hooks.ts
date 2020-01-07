import { useMutation } from 'react-apollo';
import { useCallback } from 'react';

import { RsvpStatus } from '../../graphql/types/globalTypes';
import { SaveEventRsvp, SaveEventRsvpVariables } from '../../graphql/types/SaveEventRsvp';
import saveEventRsvp from '../../graphql/mutations/saveRsvp';

type SaveRsvpCallback = (rsvpStatus: RsvpStatus) => void;

interface SaveRsvpMutation {
  readonly loading: boolean;
  readonly saveRsvpCallback: SaveRsvpCallback;
}

interface UseSaveRsvpMutationOptions {
  readonly eventId: number;
  readonly teamId: number;
}

type UseSaveRsvpMutation = (options: UseSaveRsvpMutationOptions) => SaveRsvpMutation;
export const useSaveRsvpMutation: UseSaveRsvpMutation = ({ eventId, teamId }) => {
  const [saveRsvp, { loading }] = useMutation<SaveEventRsvp, SaveEventRsvpVariables>(saveEventRsvp);
  const saveRsvpCallback = useCallback(
    rsvpStatus => {
      saveRsvp({ variables: { eventId, teamId, rsvpStatus } });
    },
    [eventId, teamId, saveRsvp]
  );

  return {
    loading,
    saveRsvpCallback,
  };
};
