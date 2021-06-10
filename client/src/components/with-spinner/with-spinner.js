import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.style";

const WithSpinner = (WrappedComponent) => {
   const Spinner = ({ isLoading, ...otherParams }) => {
      return isLoading ? (
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
      ) : (
         <WrappedComponent {...otherParams} isLoading />
      );
   };

   return Spinner;
};

export default WithSpinner;
