Poweredbyinspiration::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  root "pages#index"
  get "contact" => "pages#contact"
  get "blog" => "pages#blog"
end
